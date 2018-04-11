<#assign imgListt=imgList?eval/>
			<@mytag.listProductType name="pts"  fatherId='' pageMax="99" />
			<#assign pts1=pts/><#--把ptypes复制到其他的变量 -->
			<#assign pts2=pts/>
			<#if pts?exists>
			<#list pts as pt>
				<#assign flag = imgListt?seq_contains(pt.productTypeId)?string("1", "0")/>
				<#if pt.fatherId==0 && flag == "0">
					<#assign displayimgListt=displayimgList?eval/>
				<li class="li-color ${cname1} malldisplay ${cname2}" style="height:${cheight}; line-height:${cheight};">
					<#list displayimgListt as displayimg>
						<#assign flag4 = displayimg.src?exists/>
						<#if pt.productTypeId == displayimg.id &&  flag4>
							<p class="pdg_font_icon"><img src="${displayimg.src}"/></p>
						</#if>
						<#if pt.productTypeId == displayimg.id &&  !flag4>
							<p class="pdg_font_icon"><i class="${displayimg.iconClass}"></i></p>
						</#if>
					</#list>
					<div class="mallLiName${menustyle}">${pt.typeName}</div>
					<div class="displayRight"> </div>
					<div class="displayRight_block">
						<dl>
							<#list pts1 as pt1>
								<#assign flag1 = imgListt?seq_contains(pt1.productTypeId)?string("1", "0")/>
								<#if pt1.fatherId==pt.productTypeId && flag1 == "0">
								<dt>
								<div class="displayRight_two">
									<a href="product.html?id=${pt1.productTypeId}">${pt1.typeName}</a>
								</div>
										<div class="${point}"></div>
										<div class="displayRight_three">
											<#list pts2 as pt2>
												<#assign flag2 = imgListt?seq_contains(pt2.productTypeId)?string("1", "0")/>
												<#if pt2.fatherId==pt1.productTypeId && flag2 == "0">
												<span><a href="product.html?id=${pt2.productTypeId}">${pt2.typeName}</a></span>
											</#if>
											</#list>
										</div>
										<div class="clear"></div>
								</dt>
								</#if>
							</#list>
						</dl>
					</div>
				</li>
				</#if>
			</#list>
			</#if>